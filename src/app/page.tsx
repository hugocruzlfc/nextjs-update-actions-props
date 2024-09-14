import { getCountriesAction } from "@/actions/get-countries.action";
import Countries from "@/components/Countries";

export default function Home() {
  const countriesDataPromise = getCountriesAction();
  return (
    <main>
      <Countries dataPromise={countriesDataPromise} />
    </main>
  );
}
