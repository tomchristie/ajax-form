# Ajax Form

Adds support for PUT, PATCH and DELETE methods in HTML forms.
Adds support for JSON and other content types in HTML forms.

**TODO**: Handle resulting location via history API

## Requirements

jQuery 1.9+

## Restrictions

* Multipart (file upload) is only supported in browsers that support the FormData API.
* Browsers that do not support the history API will result in a subsequent `GET` request.
* Cross-domain requests will result in a subsequent `GET` request.

## Usage - PUT, PATCH, DELETE

    <form action="." data-method="PUT">
        <input name='a'/>
        <input name='b'/>
        <input type="submit"/>
    </form>
    <script>
        $(document).ready(function() {
            $('form').ajaxForm();
        });
    </script>

## Usage - Content type

    <form action="." method="POST">
        <input name='_content_type'/>
        <input name='_content'/>
        <input type="submit"/>
    </form>
    <script>
        $(document).ready(function() {
            $('form').ajaxForm();
        });
    </script>
