package types

import "strings"

type SnakeCase struct {
}

// TransformWords Transforms a list of words into a variable name using snake case
func (s SnakeCase) TransformWords(words []string) string {
	result := ""

	for i, word := range words {
		if i == 0 {
			result += word
		} else {
			result += "_" + word
		}
	}

	return result
}

type KebabCase struct {
}

// TransformWords Transforms a list of words into a variable name using kebab case
func (k KebabCase) TransformWords(words []string) string {
	result := ""

	for i, word := range words {
		if i == 0 {
			result += word
		} else {
			result += "-" + word
		}
	}

	return result
}

type PascalCase struct {
}

// TransformWords Transforms a list of words into a variable name using pascal case
func (p PascalCase) TransformWords(words []string) string {
	restult := ""

	for _, word := range words {
		restult += strings.Title(word)
	}

	return restult
}

type CamelCase struct {
}

// TransformWords Transforms a list of words into a variable name using camel case
func (c CamelCase) TransformWords(words []string) string {
	result := ""

	for i, word := range words {
		if i == 0 {
			result += word
		} else {
			result += strings.Title(word)
		}
	}

	return result
}
