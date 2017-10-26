$(document).ready(function()
{
    $("#upload-file").uploadFile({
        url:"YOUR_FILE_UPLOAD_URL",
        fileName:"INPUT_FILE_NAME",
        dragDrop: true,
        showDelete: true,
        showDownload:true,
        deleteCallback: function (data, pd) {
            for (var i = 0; i < data.length; i++) {
                $.post("YOUR_FILE_DELETE_URL", {op: "delete",name: data[i]},
                    function (resp,textStatus, jqXHR) {
                        //Show Message
                        alert("File Deleted");
                    });
            }
            pd.statusbar.hide(); //You choice.

        },
        downloadCallback:function(filename,pd) {
            location.href="YOUR_FILE_DOWNLOAD_URL?filename="+filename;
        }
    });
});