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
var tbody = document.createElement("tbody");
var frequency;
var timer;

for(var i = 0;i<10;i++) {

    var tr = document.createElement("tr");

    for (var j = 0;j<10;j++){
        var td = document.createElement("td");

        if (!i && !j) {
            td.style.fontWeight = 700;
            td.style.border = "solid";
            td.style.backgroundColor = "deepskyblue";
            td.innerHTML = "� ��."
        }
        else if (!i && j) {
            td.style.fontWeight = 700;
            td.style.border = "solid";
            td.style.backgroundColor = "deepskyblue";
            td.innerHTML = "����� " + j;
        }
        else if (i && !j)
        {
            td.style.fontWeight = 700;
            td.style.border = "solid";
            td.style.backgroundColor = "deepskyblue";
            td.innerHTML = i;
        }
        else {
            td.style.backgroundColor = "#A9A9A9";
            td.innerHTML = Math.round(Math.random() * 1000);
        }

        if (i == 9)
            td.style.borderBottom = "solid";
        if (j == 9)
            td.style.borderRight = "solid";


        tr.appendChild(td);
    }
    tbody.appendChild(tr);
}

t.appendChild(tbody);

document.getElementById("table").appendChild(t);

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

