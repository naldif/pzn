package main

import "fmt"

func main() {
	type NoKTP string
	type Married bool

	var noKtpNito NoKTP = "1230219321321"
	var marriedStatus Married = true

	fmt.Println(noKtpNito)
	fmt.Println(marriedStatus)

}