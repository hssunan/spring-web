const main = {
    init: function(){
        let _this = this;
        document.querySelector('#btn-save').addEventListener('click', function(){
            _this.save();
        });
    },
    save: function(){
        let data = {
            title: document.querySelector('#title').value,
            author: document.querySelector('#author').value,
            content: document.querySelector('#content').value
        };

        $.ajax({
            type: 'POST',
            url: '/posts',
            dataType: 'json',
            contentType: 'application/json; charset=utf-8',
            data: JSON.stringify(data),
        }).done(function(){
            alert('글이 등록되었습니다.');
            location.reload();
        }).fail(function(error){
            alert('등록이 실패했습니다.');
            console.error(error);
        });
    }
}

main.init();