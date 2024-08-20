document.addEventListener('DOMContentLoaded', function()
{
    const updateButton = document.getElementById('updateButton');
    const content = document.getElementById('search');
    updateButton.addEventListener('click', function()
    {
        const newContent = content.value;
        if (newContent !== null && newContent.trim() !== '')
            updateButton.textContent = newContent;   
    }
    );
}
);