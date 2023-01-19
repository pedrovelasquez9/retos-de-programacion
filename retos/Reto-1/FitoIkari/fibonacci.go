package main

import (
	"fmt"
	"strings"
)

func main() {
	fmt.Println(fibonacci(15));
}

func fibonacci(numbers int) string {
	array := []int{0, 1}
	
	if(numbers < 2) {
		return "1";
	}
	
	for i := 1; i < numbers; i++ {
		array = append(array, array[i] + array[i - 1]);		
	}

	return strings.Replace(arrayToString(array), "0,", "", -1);
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

