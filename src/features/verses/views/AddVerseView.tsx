import { useTranslation } from "react-i18next";

import { useRouter } from "@tanstack/react-router";

import PageContent from "@/components/layout/PageContent";
import PageHeader from "@/components/layout/PageHeader";
import InputField from "@/components/ui/InputField";
import SelectField from "@/components/ui/SelectField";

export default function AddVerseView() {
  const router = useRouter();
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
        <form>
          <SelectField
            name="book"
            label={t("addVerse.fields.book.label")}
            placeholder={t("addVerse.fields.book.placeholder")}
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
                name="chapter"
                labelClassName="mr-2"
                label={t("addVerse.fields.referenceGroup.chapter.label")}
                placeholder={t(
                  "addVerse.fields.referenceGroup.chapter.placeholder",
                )}
              />

              <InputField
                name="startVerse"
                labelClassName="mr-2"
                label={t("addVerse.fields.referenceGroup.startVerse.label")}
                placeholder={t(
                  "addVerse.fields.referenceGroup.startVerse.placeholder",
                )}
              />

              <InputField
                name="endVerse"
                label={t("addVerse.fields.referenceGroup.endVerse.label")}
                placeholder={t(
                  "addVerse.fields.referenceGroup.endVerse.placeholder",
                )}
              />
            </div>
          </fieldset>

          <label className="label flex flex-col w-full items-start">
            <span className="text-sm font-bold mt-6">
              {t("addVerse.fields.verseText.label").toUpperCase()}
            </span>
            <textarea
              name="verseText"
              className="textarea w-full h-64 bg-base-300 shadow-sm"
              placeholder={t("addVerse.fields.verseText.placeholder")}
            />
          </label>

          <div className="flex justify-end">
            <button
              className="hidden md:flex btn btn-neutral mt-6 mr-2"
              type="button"
              onClick={() => router.history.back()}
            >
              {t("addVerse.buttons.cancel")}
            </button>
            <button
              className="btn btn-primary btn-lg md:btn-md w-full mt-6 md:w-fit"
              type="submit"
            >
              {t("addVerse.buttons.save")}
            </button>
          </div>
        </form>
      </PageContent>
    </>
  );
}
