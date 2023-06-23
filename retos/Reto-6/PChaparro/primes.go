package primes

// getTrueFilledArray returns an array of the given size filled with true values
func getTrueFilledArray(size uint) []bool {
	var arr = make([]bool, size)
	for i := range arr {
		arr[i] = true
	}
	return arr
}

// SieveOfEratosThenes returns a slice of prime numbers up to the given number
func SieveOfEratosthenes(n uint) []uint {
	// Initially assume all numbers are prime
	isPrime := getTrueFilledArray(n + 1)

	for i := uint(2); i*i <= n; i++ {
		// If the number was already marked as not prime, skip it
		if !isPrime[i] {
			continue
		}

		// Mark all multiples of i as not prime
		for j := i * 2; j <= n; j += i {
			isPrime[j] = false
		}
	}

	// Collect and return all prime numbers
	var primes []uint

	for i := uint(2); i <= n; i++ {
		if isPrime[i] {
			primes = append(primes, i)
		}
	}

	return primes
}
