function JAM_Dialog_Warning(_message, _event)
{
    $.dialog({ icon: 'fa fa-warning', title: 'Warning', content: _message, type: 'blue',  typeAnimated: true, buttons: { close: function () {_event; } } });
}

function JAM_Dialog_Success(_message, _event)
{
    $.dialog({ icon: 'fa fa-check', title: 'Success', content: _message, type: 'blue', typeAnimated: true, buttons: { close: function () { _event; } } });
}

function JAM_AutoConfirmation_OTPResend() {
    $.confirm({
        title: 'Resend OTP?',
        content: 'OTP will be automatically send in 10 seconds.',
        autoClose: 'resendOTP|10000',
        buttons: { resendOTP: { text: 'Resend OTP', action: function () { OTPTimmer(); }  }, cancel: function () {  } }
    });
}

function JAM_AutoConfirmation_Delete(_title, _event) {
    $.confirm({
        title: 'Are you want to delete ' + _title + ' ?',
        content: 'Process will be automatically terminated in 10 seconds.',
        autoClose: 'cancel|10000',
        buttons: { deleteData: { text: 'Delete', action: function () { _event; } }, cancel: function () { $.alert('action is canceled'); } }
    });
}
