#include <iostream>
using namespace std;

int sum(int x, int y) { return x + y; }

int main() {
  cout << "Hello World!" << endl;

  int x, y;

  cout << "Enter two numbers: ";
  cin >> x >> y;

  cout << "The sum of " << x << " and " << y << " is " << sum(x, y) << endl;

  return 0;
}
