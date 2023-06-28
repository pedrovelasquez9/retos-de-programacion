package palindrome_test

import (
	"testing"

	palindrome "github.com/pedrovelasquez9/retos-de-programacion/blob/main/retos/Reto-2/PChaparro"
	"github.com/stretchr/testify/require"
)

func TestNormalizeFunction(t *testing.T) {
	require := require.New(t)

	// Test cases 1: Remove diacritics
	input := "áéíóúÁÉÍÓÚäëïöüÄËÏÖÜàèìòùÀÈÌÒÙâêîôûÂÊÎÔÛ"
	expected := "aeiouaeiouaeiouaeiouaeiouaeiouaeiouaeiou"
	actual, err := palindrome.Normalize(input)
	require.NoError(err)
	require.Equal(expected, actual)

	// Test cases 2: Remove non-alphanumeric characters
	input = "¿Acaso hubo búhos acá?"
	expected = "acasohubobuhosaca"
	actual, err = palindrome.Normalize(input)
	require.NoError(err)
	require.Equal(expected, actual)

	input = "!Te dije que hicieras la tarea, ¿por qué no la hiciste?"
	expected = "tedijequehicieraslatareaporquenolahiciste"
	actual, err = palindrome.Normalize(input)
	require.NoError(err)
	require.Equal(expected, actual)

	input = `Esta es una frase con "comillas" y 'apóstrofes'.`
	expected = "estaesunafraseconcomillasyapostrofes"
	actual, err = palindrome.Normalize(input)
	require.NoError(err)
	require.Equal(expected, actual)
}
