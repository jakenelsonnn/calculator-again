function setDisplay(val)
{
	document.getElementById("result").innerText += val;
}

function getDisplay()
{
	return document.getElementById("result").innerText;
}

function evaluate(val)
{
	document.getElementById("result").innerText = eval(val);
}

function clearDisplay()
{
	document.getElementById("result").innerText = "";
}

var buttons = document.getElementsByClassName("button");

for(var i = 0; i < buttons.length; i++)
{
	buttons[i].addEventListener('click', function()
	{
		if(this.id == "c")
		{
			clearDisplay();
		}
		else if(this.id == "=")
		{
			evaluate(getDisplay());
		}
		else if (this.id != NaN)
		{
			setDisplay(this.id);
		}
	});
}