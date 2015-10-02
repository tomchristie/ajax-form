# AJAX Form

* Adds support for PUT, PATCH, DELETE and OPTIONS methods in HTML forms.
* Adds support for submitting JSON and other content types in HTML forms.

See [index.html](https://github.com/tomchristie/ajax-form/blob/master/index.html) for example usage.

## Requirements

jQuery 1.9+

## Restrictions

* Multipart (file upload) is only supported in browsers that support the FormData API.
* Browsers that do not support the history API will result in a subsequent `GET` request.
* Cross-domain requests will result in a subsequent `GET` request.
* Non-HTML responses will result in a subsequent `GET` request.

## Usage - PUT, PATCH, DELETE, OPTIONS methods

Use `data-method="***"`.

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

Or using button controls.

    <form action="/">
        <input name='foo'/>
        <input name='bar'/>
        <input type="submit" value="PUT" data-method="PUT">
        <input type="submit" value="PATCH" data-method="PATCH">
    </form>
    <script>
        $(document).ready(function() {
            $('form').ajaxForm();
        });
    </script>

## Usage - Content type overriding

Use `data-override="content"` and `data-override="content-type"`.

Using an input control:

    <form action="/" method="POST">
        <input data-override="content-type" value="application/json"/>
        <textarea data-override="content">{"example": "text"}</textarea>
        <input type="submit"/>
    </form>
    <script>
        $(document).ready(function() {
            $('form').ajaxForm();
        });
    </script>

Using a select control:

    <form action="/" method="POST">
        <select data-override="content-type">
            <option>application/json</option>
            <option>text/plain</option>
        </select>
        <textarea data-override="content">{"example": "text"}</textarea>
        <input type="submit"/>
    </form>
    <script>
        $(document).ready(function() {
            $('form').ajaxForm();
        });
    </script>
