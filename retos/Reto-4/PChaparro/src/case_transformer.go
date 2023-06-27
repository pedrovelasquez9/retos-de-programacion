package case_transformer

import (
	"fmt"
	"regexp"
)

// IdentifyNamingConvention Identifies the naming convention of the given string
func IdentifyNamingConvention(input string) (string, error) {
	camelCaseRegexp := regexp.MustCompile(`^[a-z]+([A-Z][a-z]+)*$`)
	kebabCaseRegexp := regexp.MustCompile(`^[a-z]+(-[a-z]+)*$`)
	snakeCaseRegexp := regexp.MustCompile(`^[a-z]+(_[a-z]+)*$`)
	pascalCaseRegexp := regexp.MustCompile(`^[A-Z][a-z]+([A-Z][a-z]+)*$`)

	if camelCaseRegexp.MatchString(input) {
		return "camel", nil
	} else if kebabCaseRegexp.MatchString(input) {
		return "kebab", nil
	} else if snakeCaseRegexp.MatchString(input) {
		return "snake", nil
	} else if pascalCaseRegexp.MatchString(input) {
		return "pascal", nil
	} else {
		error := fmt.Errorf("The given string: %s does not match any naming convention", input)
		return "", error
	}
}

// Transform Converts the given string to the given naming convention returning the initial naming convenction (if any)
func Transform(input string, namingConvenction string) (string, string, error) {
	return "", "", nil
}
