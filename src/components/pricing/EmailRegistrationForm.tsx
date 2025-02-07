
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Form, FormControl, FormField, FormItem, FormMessage } from "@/components/ui/form";
import { useToast } from "@/components/ui/use-toast";

const formSchema = z.object({
  email: z.string().email("Invalid email address"),
});

export const EmailRegistrationForm = () => {
  const { toast } = useToast();
  
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    toast({
      title: "Email registered!",
      description: "You will receive your license details soon.",
    });
    console.log(values);
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 mb-6">
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  className="bg-background/80 border-primary/30 placeholder:text-gray-500 text-primary"
                  {...field}
                />
              </FormControl>
              <FormMessage className="text-red-400" />
            </FormItem>
          )}
        />
        <Button 
          type="submit" 
          className="w-full bg-primary text-background hover:bg-primary/90 transition-all duration-300 transform hover:scale-105"
        >
          Register Email
        </Button>
      </form>
    </Form>
  );
};
