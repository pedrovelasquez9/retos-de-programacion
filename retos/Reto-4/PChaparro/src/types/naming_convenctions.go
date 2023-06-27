package types

import (
	"fmt"
	"strings"
	"unicode"
)

type SnakeCase struct{}

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

// DeTransformToWords Transforms a variable name using snake case into a list of words
func (s SnakeCase) DeTransformToWords(input string) []string {
	return strings.Split(input, "_")
}

type KebabCase struct{}

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

// DeTransformToWords Transforms a variable name using kebab case into a list of words
func (k KebabCase) DeTransformToWords(input string) []string {
	return strings.Split(input, "-")
}

type PascalCase struct{}

// TransformWords Transforms a list of words into a variable name using pascal case
func (p PascalCase) TransformWords(words []string) string {
	restult := ""

	for _, word := range words {
		restult += strings.Title(word)
	}

	return restult
}

// DeTransformToWords Transforms a variable name using camel case into a list of words
func (p PascalCase) DeTransformToWords(input string) []string {
	result := []string{}
	currentWord := fmt.Sprintf("%c", input[0])

	for i := 1; i < len(input); i++ {
		char := input[i]
		if unicode.IsUpper(rune(char)) {
			result = append(result, strings.ToLower(currentWord))
			currentWord = string(char)
		} else {
			currentWord += string(char)
		}
	}

	// Append the final word
	result = append(result, strings.ToLower(currentWord))

	return result
}

type CamelCase struct{}

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

// DeTransformToWords Transforms a variable name using camel case into a list of words
func (c CamelCase) DeTransformToWords(input string) []string {
	result := []string{}
	currentWord := fmt.Sprintf("%c", input[0])

	for i := 1; i < len(input); i++ {
		char := input[i]
		if unicode.IsUpper(rune(char)) {
			result = append(result, strings.ToLower(currentWord))
			currentWord = string(char)
		} else {
			currentWord += string(char)
		}
	}

	// Append the final word
	result = append(result, strings.ToLower(currentWord))

	return result
}

type DefaultSpaceSeparatedCase struct{}

// TransformWords Transforms a list of words into a variable name using space separated case
func (d DefaultSpaceSeparatedCase) TransformWords(words []string) string {
	return strings.Join(words, " ")
}

// DeTransformToWords Transforms a variable name using space separated case into a list of words
func (d DefaultSpaceSeparatedCase) DeTransformToWords(input string) []string {
	return strings.Split(input, " ")
}
