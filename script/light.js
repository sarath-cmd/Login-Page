function darkmode()
{
    var dark = document.getElementById('blackbox');
    if(dark.classList.contains('hidden'))
    {
        dark.classList.remove('hidden');
    }
    else
    {
        dark.classList.add('hidden');
    }
}