package grifts

import (
	"github.com/francocorreasosa/site/actions"
	"github.com/gobuffalo/buffalo"
)

func init() {
	buffalo.Grifts(actions.App())
}
