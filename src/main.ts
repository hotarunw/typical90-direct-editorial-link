import { codes, editorials, problems, problemsApi } from "./utils";
import { taskID } from "./utils/parser";

/**
 * 最初に実行される部分 \
 * 共通の処理を実行した後ページごとの処理を実行する
 */
(() => {
  const h2 = document.getElementsByClassName("h2")[0] as HTMLElement;
  if (!h2) return;

  const index =
    Number(problemsApi.find((e) => e.id === taskID)?.problem_index) - 1;

  h2.insertAdjacentHTML(
    "beforeend",
    `<a class="btn btn-info btn-sm" href="${
      problems[index] ?? "https://atcoder.jp/contests/typical90"
    }" target="_blank">問題</a>`
  );
  h2.insertAdjacentHTML(
    "beforeend",
    `<a class="btn btn-info btn-sm" href="${
      editorials[index] ?? "https://atcoder.jp/contests/typical90"
    }" target="_blank">解説</a>`
  );
  h2.insertAdjacentHTML(
    "beforeend",
    `<a class="btn btn-info btn-sm" href="${
      codes[index] ?? "https://atcoder.jp/contests/typical90"
    }" target="_blank">コード</a>`
  );
})();
