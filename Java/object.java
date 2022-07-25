
public class object {

        static class Student {
                int id;
                String name;
                String cityName;
                int age;

                public String toString() {
                        return getClass().getSimpleName() + "[name=" + name + "]";
                }
        }

        public static void main(String[] args) {
                Student student1 = new Student();
                System.out.println(student1);
        }

}