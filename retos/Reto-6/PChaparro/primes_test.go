package primes_test

import (
	"testing"

	primes "github.com/pedrovelasquez9/retos-de-programacion/retos/Reto-6/PChaparro"
	"github.com/stretchr/testify/assert"
)

func TestSieveOfEratosthenes(t *testing.T) {
	assert := assert.New(t)

	// Test 1
	result := primes.SieveOfEratosthenes(1)
	expected := []uint{}
	assert.Equal(len(expected), len(result))
	assert.ElementsMatch(expected, result)

	// Test 2
	result = primes.SieveOfEratosthenes(2)
	expected = []uint{2}
	assert.Equal(len(expected), len(result))
	assert.ElementsMatch(expected, result)

	// Test 3
	result = primes.SieveOfEratosthenes(10)
	expected = []uint{2, 3, 5, 7}
	assert.Equal(len(expected), len(result))
	assert.ElementsMatch(expected, result)

	// Test 4
	result = primes.SieveOfEratosthenes(20)
	expected = []uint{2, 3, 5, 7, 11, 13, 17, 19}
	assert.Equal(len(expected), len(result))
	assert.ElementsMatch(expected, result)

	// Test 5
	result = primes.SieveOfEratosthenes(100)
	expected = []uint{
		2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31,
		37, 41, 43, 47, 53, 59, 61, 67, 71, 73,
		79, 83, 89, 97,
	}
	assert.Equal(len(expected), len(result))
	assert.ElementsMatch(expected, result)

	// As the expected result of the following test is too large, we will only check the length of the result
	// Test 6
	result = primes.SieveOfEratosthenes(1000)
	assert.Equal(168, len(result))

	// Test 7
	result = primes.SieveOfEratosthenes(10000)
	assert.Equal(1229, len(result))
}
