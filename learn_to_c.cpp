#include <iostream>
using namespace std;

int main() {
  cout << "Hello World!" << endl;

  string name;
  int age;

  cout << "Enter your name: ";
  cin >> name;
  cout << "Enter your age: ";
  cin >> age;

  double gpa = 3.55;
  char bloodType = 'O';
  bool living = true;

  if (age >= 18){
    cout << "￣￣￣￣￣￣￣￣￣￣￣" << endl;
    cout << "   My name is " << name << endl;
    cout << "   I am " << age <<" years old." << endl;
    cout << "   My gpa is " << gpa << endl;
    cout << "   My blood type is " << bloodType << endl;
    cout << "______________________" << endl;
    cout << "(\\__/)  ||" << endl;
    cout << "(•ㅅ•) ||" << endl;
    cout << "/ 　 づ" << endl;
  } else if (age >= 100){
      cout << "Are you sure that you are belong here..." << endl;
  } else {
    cout << "You do not belong here, please leave." << endl;
  }

  cout << "Let's count 1 to 10." << endl;
  for (int i = 1; i <= 10; i++){
    cout << i << " ";
  }
  // int i = 1;
  // while (i <= 10){
  //   cout << i << " ";
  //   i++;
  // }

  return 0;
}

// how to run code
// `g++ learn_to_c.cpp -o ltc`
// `./ltc`
