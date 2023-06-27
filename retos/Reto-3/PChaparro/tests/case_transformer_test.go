package case_transformer_test

import (
	"testing"

	case_transformer "github.com/pedrovelasquez9/retos-de-programacion/blob/main/retos/Reto-3/PChaparro/src"
	"github.com/stretchr/testify/require"
)

func TestCaseTransformer(t *testing.T) {
	require := require.New(t)
	input := "hola mundo"

	// Invalid naming convention
	_, err := case_transformer.Transform(input, "invalid")
	require.Error(err)

	// Empty input
	_, err = case_transformer.Transform("", "snake")
	require.Error(err)

	// Snake case
	result, err := case_transformer.Transform(input, "snake")
	require.NoError(err)
	require.Equal("hola_mundo", result)

	// Kebab case
	result, err = case_transformer.Transform(input, "kebab")
	require.NoError(err)
	require.Equal("hola-mundo", result)

	// Pascal case
	result, err = case_transformer.Transform(input, "pascal")
	require.NoError(err)
	require.Equal("HolaMundo", result)

	// Camel case
	result, err = case_transformer.Transform(input, "camel")
	require.NoError(err)
	require.Equal("holaMundo", result)
}
