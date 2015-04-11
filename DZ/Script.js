/**
 * Created by Andrey on 10.04.2015.
 */
/*
*3.	������� ������� ��������� �����.
*  ������� 10�10 ���������, � ������� � ������������ �������� �������� ����������.
*  ���� ����� ���������� ������ �������, �� ������ ��� �������, ������ ������� �� ��������� �����.
*  ������ �� ��� ����������, � ��������� ��������� �� 5 ����.
*  � ��������� ������� �������� ����.
*  ������� ����� ����������� ������ ������������, ����� ������.
* */

var t = document.getElementById("table");

var frequency;
var timer;


for(var i = 0;i<10;i++) {

    var tr = document.createElement("TR");
    t.appendChild(tr);

    for (var j = 0;j<10;j++){
        var td = document.createElement("TD");
        tr.appendChild(td);

        if (!i && !j) {
            var text = document.createTextNode("���.");
            td.appendChild(text);
            td.style.fontWeight = 700;
            td.style.border = "ridge 5px Snow";
            td.style.backgroundColor = "deepskyblue";
        }
        else if (!i && j) {
            text = document.createTextNode("����� " + j);
            td.appendChild(text);
            td.style.fontWeight = 700;
            td.style.border = "ridge 5px Snow";
            td.style.backgroundColor = "deepskyblue";
        }
        else if (i && !j)
        {
            text = document.createTextNode(i);
            td.appendChild(text);
            td.style.fontWeight = 700;
            td.style.border = "ridge 5px Snow";
            td.style.backgroundColor = "deepskyblue";
        }
        else {
            text = document.createTextNode(Math.round(Math.random() * 1000));
            td.appendChild(text);
            td.style.border = "ridge 3px Snow";
            td.style.backgroundColor = "#A9A9A9";
        }

        if (i == 9)
            td.style.borderBottom = "ridge 5px Snow";
        if (j == 9)
            td.style.borderRight = "ridge 5px Snow";

    }

}

function Show ()
{
    for (var i = 1; i < Math.round(Math.random() * 4 + 1); i++) {
        var row = Math.round(Math.random() * 8 + 1);
        var cell = Math.round(Math.random() * 8 + 1);
        var newValue = Math.round(Math.random() * 1000);
        var temp = t.rows[row].cells[cell].innerHTML;
        t.rows[row].cells[cell].innerHTML = newValue;
        if (newValue > temp)
            t.rows[row].cells[cell].style.backgroundColor = "green";
        if (newValue < temp)
            t.rows[row].cells[cell].style.backgroundColor = "red";
    }
}

function Run ()
{
    if (!timer) {
        frequency = prompt("������� ������� ����� ����������� (���.)" , "");

        while ((frequency.replace (/\d/g, '').length) || frequency == 0)
            frequency = prompt("������. ������� ��� ���." , "");

        timer = window.setInterval('Show()', frequency * 1000);
        button.firstChild.nodeValue = "����������";
    }
    else
    {
        button.firstChild.nodeValue = "���������";
        Stop();
    }
}

function Stop ()
{
    window.clearInterval(timer);
    timer = null;
}

