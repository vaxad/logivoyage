"use client";
import { z } from "zod";

import { Button, buttonVariants } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import formSchema from "@/lib/types/form-schema";
import useRouteOptimizationForm, {
  FormValues,
} from "@/hooks/use-route-optimization-form";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Optimization, Status } from "@/lib/types/route-optimization";
import {
  Page,
  Text,
  View,
  Document,
  StyleSheet,
  PDFDownloadLink,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    padding: 30,
    fontSize: 12,
  },
  section: {
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    marginBottom: 20,
  },
  label: {
    fontWeight: "bold",
    marginBottom: 5,
  },
  data: {
    marginBottom: 10,
  },
  footer: {
    marginTop: 20,
    textAlign: "center",
    fontSize: 10,
  },
});

// The Invoice component to create the PDF structure
const Invoice = ({ data }: { data: FormValues }) => (
  <Document>
    <Page size="A4" style={styles.page}>
      <Text style={styles.title}>Invoice</Text>
      <View style={styles.section}>
        <Text style={styles.label}>Item Name</Text>
        <Text style={styles.data}>{data.title}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>ID</Text>
        <Text style={styles.data}>{data.id}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Optimization</Text>
        <Text style={styles.data}>{data.optimization}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Status</Text>
        <Text style={styles.data}>{data.status}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>From</Text>
        <Text style={styles.data}>{data.journey.from}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>To</Text>
        <Text style={styles.data}>{data.journey.to}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Progress</Text>
        <Text style={styles.data}>{data.journey.progress}</Text>
      </View>
      <View style={styles.section}>
        <Text style={styles.label}>Price</Text>
        <Text style={styles.data}>{data.price}</Text>
      </View>
      <Text style={styles.footer}>Thank you for your business!</Text>
    </Page>
  </Document>
);
export default function CreateRouteForm() {
  const form = useRouteOptimizationForm();

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
  }

  return (
    <Form {...form}>
      <h1 className="text-xl font-bold px-4 pt-4">
        Create a Route for optimization
      </h1>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 p-4">
        <FormField
          control={form.control}
          name="title"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Item Name</FormLabel>
              <FormControl>
                <Input placeholder="Shipment title" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="id"
          render={({ field }) => (
            <FormItem>
              <FormLabel>ID</FormLabel>
              <FormControl>
                <Input placeholder="Shipment ID" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="optimization"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Optimization</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a optimization method" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(Optimization).map((opt) => (
                    <SelectItem key={opt} value={opt}>
                      {opt}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="status"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Status</FormLabel>
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                  <SelectTrigger>
                    <SelectValue placeholder="Select a status" />
                  </SelectTrigger>
                </FormControl>
                <SelectContent>
                  {Object.values(Status).map((status) => (
                    <SelectItem key={status} value={status}>
                      {status}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="journey.from"
          render={({ field }) => (
            <FormItem>
              <FormLabel>From</FormLabel>
              <FormControl>
                <Input placeholder="Origin" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="journey.to"
          render={({ field }) => (
            <FormItem>
              <FormLabel>To</FormLabel>
              <FormControl>
                <Input placeholder="Destination" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="journey.progress"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Progress</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  step="0.01"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="price"
          render={({ field }) => (
            <FormItem>
              <FormLabel>Price</FormLabel>
              <FormControl>
                <Input
                  type="number"
                  {...field}
                  onChange={(e) => field.onChange(parseFloat(e.target.value))}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <div className="flex w-full justify-between">
          {/* <Button type="submit">Submit</Button> */}
          <PDFDownloadLink
            style={{ textDecoration: "none" }}
            className={buttonVariants({ variant: "default" })}
            document={<Invoice data={form.getValues()} />}
            fileName="invoice.pdf"
          >
            Download PDF
          </PDFDownloadLink>
          <Button
            onClick={() => form.reset()}
            type="reset"
            variant="destructive"
          >
            Clear
          </Button>
        </div>
      </form>
    </Form>
  );
}
