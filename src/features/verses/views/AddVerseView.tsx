import { useState } from "react";
import { useTranslation } from "react-i18next";

import PageContent from "@/components/layout/PageContent";
import PageHeader from "@/components/layout/PageHeader";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";

export default function AddVerseView() {
  const [book, setBook] = useState("");
  const [chapter, setChapter] = useState("");
  const [startVerse, setStartVerse] = useState("");
  const [endVerse, setEndVerse] = useState("");
  const [verseText, setVerseText] = useState("");

  const { t } = useTranslation(["verses", "bible", "navigation"]);
  const oldTestamentBooks = t("bible:oldTestament.books", {
    returnObjects: true,
  });
  const newTestamentBooks = t("bible:newTestament.books", {
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
          value={book}
          onChange={(e) => setBook(e.target.value)}
        >
          {oldTestamentBooks.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
          <hr className="text-base-content/20" />
          {newTestamentBooks.map(({ id, name }) => (
            <option key={id} value={id}>
              {name}
            </option>
          ))}
        </SelectField>

        <fieldset className="fieldset mt-6">
          <legend className="fieldset-legend font-bold text-sm text-base-content/60">
            {t("addVerse.fields.referenceGroup.title").toUpperCase()}
          </legend>

          <div className="flex">
            <InputField
              className="mr-2"
              label={t("addVerse.fields.referenceGroup.chapter.label")}
              placeholder={t(
                "addVerse.fields.referenceGroup.chapter.placeholder",
              )}
              value={chapter}
              onChange={(e) => setChapter(e.target.value)}
            />

            <InputField
              className="mr-2"
              label={t("addVerse.fields.referenceGroup.startVerse.label")}
              placeholder={t(
                "addVerse.fields.referenceGroup.startVerse.placeholder",
              )}
              value={startVerse}
              onChange={(e) => setStartVerse(e.target.value)}
            />

            <InputField
              label={t("addVerse.fields.referenceGroup.endVerse.label")}
              placeholder={t(
                "addVerse.fields.referenceGroup.endVerse.placeholder",
              )}
              value={endVerse}
              onChange={(e) => setEndVerse(e.target.value)}
            />
          </div>
        </fieldset>

        <label className="label flex flex-col w-full items-start">
          <span className="text-sm font-bold mt-6">
            {t("addVerse.fields.verseText.label").toUpperCase()}
          </span>
          <textarea
            className="textarea w-full h-64 bg-base-300 shadow-sm"
            placeholder={t("addVerse.fields.verseText.placeholder")}
            value={verseText}
            onChange={(e) => setVerseText(e.target.value)}
          />
        </label>
      </PageContent>
    </>
  );
}
