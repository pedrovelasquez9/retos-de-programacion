package palindrome

import (
	"fmt"
	"regexp"
	"strings"
	"unicode"

	"golang.org/x/text/runes"
	"golang.org/x/text/transform"
	"golang.org/x/text/unicode/norm"
)

var returnMessages = map[bool]string{
	true:  "La %s es un palíndromo",
	false: "La %s no es un palíndromo",
}

// Normalize returns a normalized string with all unicode characters removed
func Normalize(s string) (string, error) {
	// Normalize unicode characters
	transformer := transform.Chain(norm.NFD, runes.Remove(runes.In(unicode.Mn)), norm.NFC)
	out, _, err := transform.String(transformer, s)
	if err != nil {
		return "", err
	}

	// Remove non-alphanumeric characters
	nonAlphanumericRegexp := regexp.MustCompile(`[^a-zA-Z0-9 ]+`)
	out = nonAlphanumericRegexp.ReplaceAllString(out, "")

	// Remove spaces
	out = strings.ReplaceAll(out, " ", "")

	// Convert to lowercase
	out = strings.ToLower(out)

	return out, nil
}

// IsPalindrome returns true if the given string is a palindrome
func IsPalindrome(s string) (string, error) {
	// Normalize the string
	normalized, err := Normalize(s)
	if err != nil {
		return "false", err
	}

	// Reverse the string
	reversed := ""

	for _, char := range normalized {
		reversed = string(char) + reversed
	}

	// Compare
	var textType string
	isPalindrome := normalized == reversed

	if len(strings.Split(s, " ")) > 1 {
		textType = "frase"
	} else {
		textType = "palabra"
	}

	message := fmt.Sprintf(returnMessages[isPalindrome], textType)
	return message, nil
}
