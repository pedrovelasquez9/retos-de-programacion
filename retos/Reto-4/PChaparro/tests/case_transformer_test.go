package case_transformer_test

import (
	"testing"

	case_transformer "github.com/pedrovelasquez9/retos-de-programacion/blob/main/retos/Reto-4/PChaparro/src"
	"github.com/stretchr/testify/require"
)

func TestIdentifyNamingConvention(t *testing.T) {
	require := require.New(t)

	// Snake case
	namingConvention, err := case_transformer.IdentifyNamingConvention("hola_mundo")
	require.NoError(err)
	require.Equal("snake", namingConvention)

	// Camel case
	namingConvention, err = case_transformer.IdentifyNamingConvention("holaMundo")
	require.NoError(err)
	require.Equal("camel", namingConvention)

	// Pascal case
	namingConvention, err = case_transformer.IdentifyNamingConvention("HolaMundo")
	require.NoError(err)
	require.Equal("pascal", namingConvention)

	// Kebab case
	namingConvention, err = case_transformer.IdentifyNamingConvention("hola-mundo")
	require.NoError(err)
	require.Equal("kebab", namingConvention)

	// Space separated case
	namingConvention, err = case_transformer.IdentifyNamingConvention("hola mundo")
	require.Error(err)
	require.Equal("", namingConvention)
}
