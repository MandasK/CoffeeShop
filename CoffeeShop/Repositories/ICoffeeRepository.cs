using CoffeeShop.Models;
using System.Collections.Generic;

namespace CoffeeShop.Repositories
{
    public interface ICoffeeRepository
    {
        Coffee Get(int id);
        List<Coffee> GetAll();
        void Update(Coffee coffee);
        void Add(Coffee coffee);
        void Delete(int id);
    }
}