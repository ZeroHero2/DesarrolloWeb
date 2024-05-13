using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace .NET
{
    public class Program
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
}