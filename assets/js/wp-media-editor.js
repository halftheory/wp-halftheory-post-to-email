(function ($, _) {
  // The "Upload" button.
  $('.wp_media_button_upload').click(function () {
    const send_attachment_bkp = wp.media.editor.send.attachment;
    const button = $(this);
    wp.media.editor.send.attachment = function (props, attachment) {
      $(button).parent().find('input[type="text"]').val(attachment.url);
      wp.media.editor.send.attachment = send_attachment_bkp;
    };
    wp.media.editor.open(button);
    return false;
  });

  // The "Remove" button (remove the value from input type='text').
  $('.wp_media_button_remove').click(function () {
    const answer = confirm('Are you sure?');
    if (answer === true) {
      $(this).parent().find('input[type="text"]').val('');
    }
    return false;
  });
}(jQuery, _));
