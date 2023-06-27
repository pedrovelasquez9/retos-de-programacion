package case_transformer

import (
	"fmt"
	"regexp"

	"github.com/pedrovelasquez9/retos-de-programacion/blob/main/retos/Reto-4/PChaparro/src/types"
)

// IdentifyNamingConvention Identifies the naming convention of the given string
func IdentifyNamingConvention(input string) (string, error) {
	camelCaseRegexp := regexp.MustCompile(`^[a-z]+([A-Z][a-z]+)*$`)
	kebabCaseRegexp := regexp.MustCompile(`^[a-z]+(-[a-z]+)*$`)
	snakeCaseRegexp := regexp.MustCompile(`^[a-z]+(_[a-z]+)*$`)
	pascalCaseRegexp := regexp.MustCompile(`^[A-Z][a-z]+([A-Z][a-z]+)*$`)
	spaceSeparatedCaseRegexp := regexp.MustCompile(`^[a-z]+( [a-z]+)*$`)

	if camelCaseRegexp.MatchString(input) {
		return "camel", nil
	} else if kebabCaseRegexp.MatchString(input) {
		return "kebab", nil
	} else if snakeCaseRegexp.MatchString(input) {
		return "snake", nil
	} else if pascalCaseRegexp.MatchString(input) {
		return "pascal", nil
	} else if spaceSeparatedCaseRegexp.MatchString(input) {
		return "space", nil
	} else {
		error := fmt.Errorf("The given string: %s does not match any naming convention", input)
		return "", error
	}
}

// Transform Converts the given string to the given naming convention returning the initial naming convenction (if any)
func Transform(input string, targetNamingConvenction string) (initialConvenction, finalString string, err error) {
	// Get the original convenction
	initialNamingConvention, err := IdentifyNamingConvention(input)
	if err != nil {
		return "", "", err
	}

	// Declare the transformers
	var fromTransformer types.NamingConvention
	var toTransformer types.NamingConvention

	// Instance the transformers
	switch initialNamingConvention {
	case "camel":
		fromTransformer = types.CamelCase{}
	case "kebab":
		fromTransformer = types.KebabCase{}
	case "snake":
		fromTransformer = types.SnakeCase{}
	case "pascal":
		fromTransformer = types.PascalCase{}
	default:
		fromTransformer = types.DefaultSpaceSeparatedCase{}
	}

	switch targetNamingConvenction {
	case "camel":
		toTransformer = types.CamelCase{}
	case "kebab":
		toTransformer = types.KebabCase{}
	case "snake":
		toTransformer = types.SnakeCase{}
	case "pascal":
		toTransformer = types.PascalCase{}
	case "space":
		toTransformer = types.DefaultSpaceSeparatedCase{}
	default:
		error := fmt.Errorf("The given naming convention: %s is not supported", targetNamingConvenction)
		return "", "", error
	}

	// Get the words from the input
	words := fromTransformer.DeTransformToWords(input)

	// Transform the words to the target naming convention
	finalString = toTransformer.TransformWords(words)

	return initialNamingConvention, finalString, nil
}
