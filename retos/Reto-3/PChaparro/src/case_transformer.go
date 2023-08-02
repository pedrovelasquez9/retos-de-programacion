package case_transformer

import (
	"fmt"
	"strings"

	"github.com/pedrovelasquez9/retos-de-programacion/blob/main/retos/Reto-3/PChaparro/src/types"
)

// Transform Transforms a string into a variable name using the selected naming convention
func Transform(input string, namingConvention string) (string, error) {
	var result string
	var transformer types.NamingConvention

	// Validate input
	if input == "" {
		error := fmt.Errorf("Input cannot be empty")
		return "", error
	}

	// Instance the correct transformer according to the naming convention
	switch namingConvention {
	case "snake":
		transformer = types.SnakeCase{}
	case "kebab":
		transformer = types.KebabCase{}
	case "pascal":
		transformer = types.PascalCase{}
	case "camel":
		transformer = types.CamelCase{}
	default:
		error := fmt.Errorf("Naming convention '%s' is not supported", namingConvention)
		return "", error
	}

	// Get the final variable name according to the selected transformer
	words := strings.Split(input, " ")
	result = transformer.TransformWords(words)
	return result, nil
}
