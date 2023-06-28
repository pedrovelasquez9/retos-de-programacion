package palindrome

import (
	"regexp"
	"strings"
	"unicode"

	"golang.org/x/text/runes"
	"golang.org/x/text/transform"
	"golang.org/x/text/unicode/norm"
)

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
