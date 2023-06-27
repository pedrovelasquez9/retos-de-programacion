package types

// NamingConvention An interface that defines the methods that a naming convention must implement to apply "polymorphism"
type NamingConvention interface {
	TransformWords(words []string) string
}
