module MainCss exposing (..)

import Css exposing (..)
import Css.Namespace exposing (namespace)
import Asset
import Assets exposing (hero)


type CssClasses
    = Container


type CssIds
    = Page
    | Page2


css =
    (stylesheet << namespace "helloworld")
        [ id Page
            [ backgroundColor (hex "000000")
            , color (hex "FF0000")
            , fontSize (px 50)
            ]
        , id Page2
            [ backgroundImage (url (Asset.url hero))
            , width (px 1200)
            , height (px 312)
            ]
        , class Container
            [ margin zero
            , padding zero
            ]
        ]