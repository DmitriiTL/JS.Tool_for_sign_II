window.onload = function()
{
    
    var button = document.querySelector("button");

    button.onclick = function()
    {
        var source = document.getElementById("raw_date"); 
        var distinct = document.getElementById("result_date");
        var parent_div = document.getElementById('parent_div');
        if(distinct.value !=='')
        {
            add_child(parent_div,distinct.value)
        }
        distinct.value = '';
        string_without_token = delete_phrase(source.value);	
        distinct.value = delete_special_characters(string_without_token);

    };


    function delete_phrase(string_for_process)
    // This Function will remove phrase "Authorization: Bearer", "-----END CMS-----"". "-----BEGIN CMS-----""
    {
        var arr_of_phrase = ['Authorization: Bearer','-----END CMS-----','-----BEGIN CMS-----']
        var result = string_for_process;
        
        arr_of_phrase.forEach(function(element)
            {
                
                result = result.replace(element,'');		
            }
        );
        return result; 
    }

    function add_child(HTMLelement, string) 
    {
        var div_child = document.createElement("div");
        div_child.style.cssFloat = 'left';
        var tital_child = document.createElement("H5");
        var title_for_div = prompt("Enter type sign: Prod/Demo. Owner: UOT/Admin", '');
        if (title_for_div == '' || title_for_div == 'nul') 
            {
                title_for_div = 'Sign';
            }
        title_for_div = title_for_div +" created at " +	Get_time_and_date();
        tital_child.innerHTML = title_for_div;
        var textarea_child = document.createElement("textarea");
        textarea_child.value = string;
        textarea_child.rows = 10;
        textarea_child.cols = 45;
        div_child.appendChild(tital_child);
        div_child.appendChild(textarea_child);
        HTMLelement.appendChild(div_child);

    }

    function Get_time_and_date() {
    // Th	
        var options = {
            hour: 'numeric',
            minute: 'numeric',
            //year: 'numeric',
            //month: 'numeric',
            //day: 'numeric',
            timezone: 'UTC'
        };
        return	(new Date).toLocaleTimeString("ru", options);
    }



    function delete_special_characters(string_for_process) 
    // This function will delete special_characters from string. Will be deleted all characters like this \r \n
    {   			
        var result_string = "";
        for (let index = 0; index < string_for_process.length; index++)
        {
            var current_symbol = string_for_process[index];
            switch(current_symbol)
            {
                case "\r" :
                    current_symbol = "";	
                    break;
                case "\n":
                    current_symbol = "";
                    break;	
                case " ":
                    current_symbol = "";
                    break;	
                default:
                    current_symbol = string_for_process[index];
                    break;			
            }
            result_string = result_string + current_symbol;	
        }
        return result_string;	
    }
    
}
