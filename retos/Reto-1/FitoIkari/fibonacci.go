package fibonacci

import "fmt"

func Fibonacci(numbers int) string {
	array := []int{1, 1, 2}
	
	
	for i := 3; i < numbers; i++ {		
		array = append(array, array[i - 1] + array[i - 2]);
	}

	return arrayToString(array);
}

func arrayToString(array []int) string{
	result := "";

	for i:= 0; i < len(array); i++ {
		result += fmt.Sprint(array[i]);
		if i < len(array) - 1 {
			result += ",";
		}
	}

	return result;
}

