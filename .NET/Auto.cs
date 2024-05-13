
using System;

class Auto
{
    private int matricula;
    private string modelo;

    public Auto(int matricula, string modelo)
    {
        this.matricula = matricula;
        this.modelo = modelo;
    }

    public void Arrancar()
    {
        Console.WriteLine($"{modelo} arrancó.");
    }

    public void Repostar()
    {
        if (modelo.ToLower() == "tesla")
        {
            Console.WriteLine($"{modelo} fue recargado su batería.");
        }
        else
        {
            Console.WriteLine($"{modelo} fue rellenado el tanque.");
        }
    }

    public void Estacionar()
    {
        Console.WriteLine($"{modelo} se estacionó.");
    }
}

class Program
{
    static void Main(string[] args)
    {
        Auto tesla = new Auto(1234, "Tesla");
        Auto mini = new Auto(5678, "Mini");
        Auto cheyenne = new Auto(91011, "Cheyenne");

        tesla.Arrancar();
        tesla.Repostar();
        tesla.Estacionar();

        mini.Arrancar();
        mini.Repostar();
        mini.Estacionar();

        cheyenne.Arrancar();
        cheyenne.Repostar();
        cheyenne.Estacionar();
    }
}