function replaceDocument(docString) {
    doc = document.open("text/html");
    doc.write(docString);
    doc.close();
}


function doAjaxSubmit(e) {
    var form = $(this);
    var method = form.data('method') || form.attr('method') || 'GET';
    method = method.toUpperCase()
    if (method === 'GET') {
        // GET requests can always use standard form submits.
        return;
    }

    var contentType = form.find('input[name=_content_type]').val()
    if (method === 'POST' && !contentType) {
        // POST requests can use standard form submits, unless we have
        // overridden the content type.
        return;
    }

    // At this point we're making an AJAX form submission.
    e.preventDefault();

    var url = form.attr('action');
    var data;
    if (contentType) {
        data = form.find('[name=_content]').val() || ''
    } else {
        contentType = form.attr('enctype') || form.attr('encoding')
        if (contentType === 'multipart/form-data') {
            if (!window.FormData) {
                alert('Your browser does not support AJAX multipart form submissions');
                return;
            }
            data = new FormData(form[0])
        } else {
            contentType = 'application/x-www-form-urlencoded'
            data = form.serialize();
        }
    }

    var ret = $.ajax({
        url: url,
        method: method,
        data: data,
        contentType: contentType,
        processData: false
    });
    ret.always(function(data, textStatus, jqXHR) {
        if (textStatus != 'success') {
            jqXHR = data;
        }
        replaceDocument(jqXHR.responseText);
    });
    return ret;
}


$.fn.ajaxForm = function() {
    var options = {}
    return this
        .unbind('submit.form-plugin')
        .bind('submit.form-plugin', options, doAjaxSubmit)
};
