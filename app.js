window.addEventListener('load', function(){
    const content=document.getElementById('content');
    const date=document.getElementById('date');
    const time=document.getElementById('time');
    const addBtn=document.getElementById('addBtn');
    const removeBtn=document.getElementById('removeBtn');
    const list=document.getElementById('list');
    
    const listContent=[];
    function render(){
        let htmlStr='';
        listContent.forEach(function(item){
            htmlStr+=`
            <div class="py-2 border-b-4 border-black" id="item">
                <p class="text-xl my-0.5">Content :${item.content}</p>
                <p class="text-xl my-0.5">Time :${item.date} ${item.time}</p>
            </div>
            `
        });
        list.innerHTML=htmlStr;
    };
    addBtn.addEventListener('click', function(){
        listContent.unshift({
            content: content.value,
            date: date.value,
            time: time.value
        });
        render();
    });

    removeBtn.addEventListener('click', function(){
        listContent.shift();
        render();
    });
});