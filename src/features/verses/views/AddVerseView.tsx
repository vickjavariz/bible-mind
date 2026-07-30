import { useState } from "react";
import { useTranslation } from "react-i18next";

import PageContent from "@/components/layout/PageContent";
import PageHeader from "@/components/layout/PageHeader";
import SelectField from "@/components/ui/SelectField";

export default function AddVerseView() {
  const [book, setBook] = useState("");

  const { t } = useTranslation(["verses", "bible", "navigation"]);
  const oldTestamentBooks = t("bible:oldTestament.books", {
    returnObjects: true,
  });

  return (
    <>
      <PageHeader>
        <PageHeader.BackButton />
        <PageHeader.Title>{t("navigation:addVerse")}</PageHeader.Title>
      </PageHeader>

      <PageContent>
        <SelectField
          label={t("addVerse.fields.book.label")}
          placeholder={t("addVerse.fields.book.placeholder")}
          onChange={(event) => setBook(event.target.value)}
        >
          {oldTestamentBooks.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
          <hr />
        </SelectField>
      </PageContent>
    </>
  );
}
