function regin()
{
    var reg = document.getElementById('regf');
    var log = document.getElementById('logf');
    if(reg.classList.contains('hidden'))
    {
        reg.classList.remove('hidden');
        log.classList.add('hidden');
    }
    else
    {
        reg.classList.add('hidden');
        log.classList.remove('hidden');
    }
}