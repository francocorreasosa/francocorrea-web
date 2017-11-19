package main

import (
	"log"

	"github.com/francocorreasosa/site/actions"
)

func main() {
	app := actions.App()
	if err := app.Serve(); err != nil {
		log.Fatal(err)
	}
}
