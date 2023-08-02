package case_transformer_test

import (
	"testing"

	case_transformer "github.com/pedrovelasquez9/retos-de-programacion/blob/main/retos/Reto-4/PChaparro/src"
	"github.com/pedrovelasquez9/retos-de-programacion/blob/main/retos/Reto-4/PChaparro/src/types"
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
	require.NoError(err)
	require.Equal("space", namingConvention)
}

// --- De-transformers ---
func TestCamelCaseDeTransformer(t *testing.T) {
	require := require.New(t)
	transformer := types.CamelCase{}

	words := transformer.DeTransformToWords("holaMundo")
	require.Equal([]string{"hola", "mundo"}, words)

	words = transformer.DeTransformToWords("retosDeProgramacionProgramacionEnEspannol")
	require.Equal([]string{"retos", "de", "programacion", "programacion", "en", "espannol"}, words)
}

func TestKebabCaseDeTransformer(t *testing.T) {
	require := require.New(t)
	transformer := types.KebabCase{}

	words := transformer.DeTransformToWords("hola-mundo")
	require.Equal([]string{"hola", "mundo"}, words)

	words = transformer.DeTransformToWords("retos-de-programacion-programacion-en-espannol")
	require.Equal([]string{"retos", "de", "programacion", "programacion", "en", "espannol"}, words)
}

func TestPascalCaseDeTransformer(t *testing.T) {
	require := require.New(t)
	transformer := types.PascalCase{}

	words := transformer.DeTransformToWords("HolaMundo")
	require.Equal([]string{"hola", "mundo"}, words)

	words = transformer.DeTransformToWords("RetosDeProgramacionProgramacionEnEspannol")
	require.Equal([]string{"retos", "de", "programacion", "programacion", "en", "espannol"}, words)
}

func TestSnakeCaseDeTransformer(t *testing.T) {
	require := require.New(t)
	transformer := types.SnakeCase{}

	words := transformer.DeTransformToWords("hola_mundo")
	require.Equal([]string{"hola", "mundo"}, words)

	words = transformer.DeTransformToWords("retos_de_programacion_programacion_en_espannol")
	require.Equal([]string{"retos", "de", "programacion", "programacion", "en", "espannol"}, words)
}

func TestSpaceSeparatedDeTransformer(t *testing.T) {
	require := require.New(t)
	transformer := types.DefaultSpaceSeparatedCase{}

	words := transformer.DeTransformToWords("hola mundo")
	require.Equal([]string{"hola", "mundo"}, words)

	words = transformer.DeTransformToWords("retos de programacion programacion en espannol")
	require.Equal([]string{"retos", "de", "programacion", "programacion", "en", "espannol"}, words)
}

// --- Transformers ---
func TestCamelCaseTransformer(t *testing.T) {
	require := require.New(t)

	// Cammel case to snake case
	initialConvenction, finalString, err := case_transformer.Transform("holaMundo", "snake")
	require.NoError(err)
	require.Equal("camel", initialConvenction)
	require.Equal("hola_mundo", finalString)

	// Camel case to pascal case
	initialConvenction, finalString, err = case_transformer.Transform("holaMundo", "pascal")
	require.NoError(err)
	require.Equal("camel", initialConvenction)
	require.Equal("HolaMundo", finalString)

	// Camel case to kebab case
	initialConvenction, finalString, err = case_transformer.Transform("holaMundo", "kebab")
	require.NoError(err)
	require.Equal("camel", initialConvenction)
	require.Equal("hola-mundo", finalString)

	// Camel case to space separated case
	initialConvenction, finalString, err = case_transformer.Transform("holaMundo", "space")
	require.NoError(err)
	require.Equal("camel", initialConvenction)
	require.Equal("hola mundo", finalString)

	// Camel case to camel case
	initialConvenction, finalString, err = case_transformer.Transform("holaMundo", "camel")
	require.NoError(err)
	require.Equal("camel", initialConvenction)
	require.Equal("holaMundo", finalString)
}

func TestSnakeCaseTransformer(t *testing.T) {
	require := require.New(t)

	// Snake case to camel case
	initialConvenction, finalString, err := case_transformer.Transform("hola_mundo", "camel")
	require.NoError(err)
	require.Equal("snake", initialConvenction)
	require.Equal("holaMundo", finalString)

	// Snake case to pascal case
	initialConvenction, finalString, err = case_transformer.Transform("hola_mundo", "pascal")
	require.NoError(err)
	require.Equal("snake", initialConvenction)
	require.Equal("HolaMundo", finalString)

	// Snake case to kebab case
	initialConvenction, finalString, err = case_transformer.Transform("hola_mundo", "kebab")
	require.NoError(err)
	require.Equal("snake", initialConvenction)
	require.Equal("hola-mundo", finalString)

	// Snake case to space separated case
	initialConvenction, finalString, err = case_transformer.Transform("hola_mundo", "space")
	require.NoError(err)
	require.Equal("snake", initialConvenction)
	require.Equal("hola mundo", finalString)

	// Snake case to snake case
	initialConvenction, finalString, err = case_transformer.Transform("hola_mundo", "snake")
	require.NoError(err)
	require.Equal("snake", initialConvenction)
	require.Equal("hola_mundo", finalString)
}

func TestPascalCaseTransformer(t *testing.T) {
	require := require.New(t)

	// Pascal case to camel case
	initialConvenction, finalString, err := case_transformer.Transform("HolaMundo", "camel")
	require.NoError(err)
	require.Equal("pascal", initialConvenction)
	require.Equal("holaMundo", finalString)

	// Pascal case to snake case
	initialConvenction, finalString, err = case_transformer.Transform("HolaMundo", "snake")
	require.NoError(err)
	require.Equal("pascal", initialConvenction)
	require.Equal("hola_mundo", finalString)

	// Pascal case to kebab case
	initialConvenction, finalString, err = case_transformer.Transform("HolaMundo", "kebab")
	require.NoError(err)
	require.Equal("pascal", initialConvenction)
	require.Equal("hola-mundo", finalString)

	// Pascal case to space separated case
	initialConvenction, finalString, err = case_transformer.Transform("HolaMundo", "space")
	require.NoError(err)
	require.Equal("pascal", initialConvenction)
	require.Equal("hola mundo", finalString)

	// Pascal case to pascal case
	initialConvenction, finalString, err = case_transformer.Transform("HolaMundo", "pascal")
	require.NoError(err)
	require.Equal("pascal", initialConvenction)
	require.Equal("HolaMundo", finalString)
}

func TestKebabCaseTransformer(t *testing.T) {
	require := require.New(t)

	// Kebab case to camel case
	initialConvenction, finalString, err := case_transformer.Transform("hola-mundo", "camel")
	require.NoError(err)
	require.Equal("kebab", initialConvenction)
	require.Equal("holaMundo", finalString)

	// Kebab case to snake case
	initialConvenction, finalString, err = case_transformer.Transform("hola-mundo", "snake")
	require.NoError(err)
	require.Equal("kebab", initialConvenction)
	require.Equal("hola_mundo", finalString)

	// Kebab case to pascal case
	initialConvenction, finalString, err = case_transformer.Transform("hola-mundo", "pascal")
	require.NoError(err)
	require.Equal("kebab", initialConvenction)
	require.Equal("HolaMundo", finalString)

	// Kebab case to space separated case
	initialConvenction, finalString, err = case_transformer.Transform("hola-mundo", "space")
	require.NoError(err)
	require.Equal("kebab", initialConvenction)
	require.Equal("hola mundo", finalString)

	// Kebab case to kebab case
	initialConvenction, finalString, err = case_transformer.Transform("hola-mundo", "kebab")
	require.NoError(err)
	require.Equal("kebab", initialConvenction)
	require.Equal("hola-mundo", finalString)
}

func TestSpaceSeparatedCaseTransformer(t *testing.T) {
	require := require.New(t)

	// Space separated case to camel case
	initialConvenction, finalString, err := case_transformer.Transform("hola mundo", "camel")
	require.NoError(err)
	require.Equal("space", initialConvenction)
	require.Equal("holaMundo", finalString)

	// Space separated case to snake case
	initialConvenction, finalString, err = case_transformer.Transform("hola mundo", "snake")
	require.NoError(err)
	require.Equal("space", initialConvenction)
	require.Equal("hola_mundo", finalString)

	// Space separated case to pascal case
	initialConvenction, finalString, err = case_transformer.Transform("hola mundo", "pascal")
	require.NoError(err)
	require.Equal("space", initialConvenction)
	require.Equal("HolaMundo", finalString)

	// Space separated case to kebab case
	initialConvenction, finalString, err = case_transformer.Transform("hola mundo", "kebab")
	require.NoError(err)
	require.Equal("space", initialConvenction)
	require.Equal("hola-mundo", finalString)

	// Space separated case to space separated case
	initialConvenction, finalString, err = case_transformer.Transform("hola mundo", "space")
	require.NoError(err)
	require.Equal("space", initialConvenction)
	require.Equal("hola mundo", finalString)
}
