import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Paths;
import java.util.ArrayList;




class Main {

  public static int[] calcNewLine(int[] input){
    int[] newLine = new int[input.length-1];
    for (int i = 0; i < input.length-1; i++) {
      newLine[i] = input[i+1] - input[i];
      
    }
    
    return newLine;


  }

  public static void main(String args[]) throws IOException {
    String input = new String(Files.readAllBytes(Paths.get("input.txt"))).strip();

    int acc = 0;

    String[] lines = input.split("\n");

    for (String line : lines) {
      String[] lineSplit = line.split(" ");
      int[] numbers = new int[lineSplit.length];
      for (int j = 0; j < lineSplit.length; j++) {
        
        numbers[j] = Integer.parseInt(lineSplit[j]);
      }
 
      ArrayList<int[]> arrayList = new ArrayList<>();
      int[] newLine = numbers;
      arrayList.add(numbers);
      do{
        newLine = Main.calcNewLine(newLine);

        if(Main.areAllTrue(newLine)){
          break;
        }

        arrayList.addFirst(newLine);
      }while(true);
      
   
      for (int[] tabInt : arrayList) {
        int lastNumber= tabInt[tabInt.length-1];
        
        acc += lastNumber;

        
      }

  
    }
  
    System.out.println("Result: "+acc);

  }
  public static boolean areAllTrue(int[] array)
{
    for(int b : array) if(b!=0) return false;
    return true;
}
}
