# AJAX Form

* Adds support for PUT, PATCH and DELETE methods in HTML forms.
* Adds support for submitting JSON and other content types in HTML forms.

See [index.html](https://github.com/tomchristie/ajax-form/blob/master/index.html) for example usage.

## Requirements

jQuery 1.9+

## Restrictions

* Multipart (file upload) is only supported in browsers that support the FormData API.
* Browsers that do not support the history API will result in a subsequent `GET` request.
* Cross-domain requests will result in a subsequent `GET` request.

## Usage - PUT, PATCH, DELETE methods

    <form action="/" data-method="PUT">
        <input name='foo'/>
        <input name='bar'/>
        <input type="submit"/>
    </form>
    <script>
        $(document).ready(function() {
            $('form').ajaxForm();
        });
    </script>

## Usage - Content type overriding

* Must include both `content-type` and `content` overrides.
* The content-type override may be a select or an input control.

    <form action="/" method="POST">
        <input data-override="content-type"/>
        <input data-override="content"/>
        <input type="submit"/>
    </form>
    <script>
        $(document).ready(function() {
            $('form').ajaxForm();
        });
    </script>
