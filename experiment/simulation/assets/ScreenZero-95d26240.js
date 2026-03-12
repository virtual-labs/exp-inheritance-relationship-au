import {
  _ as D,
  k as b,
  o as d,
  c,
  a as e,
  l as h,
  m as u,
  F as v,
  q as p,
  h as y,
  t as f,
  p as w,
  i as x,
  f as m,
} from "./index-e448f0f9.js";
const k = "" + new URL("clue-7da6decc.jpg", import.meta.url).href;
const z = {
    setup() {
      const n = b([
        { id: 6, word: "Customer", list: 13 },
        { id: 4, word: "Person", list: 13 },
        { id: 13, word: "Office Executive", list: 13 },
        { id: 31, word: "Vehicle", list: 13 },
      ]);
      return {
        getList: (a) => n.value.filter((i) => i.list === a),
        startDrag: (a, i) => {
          (console.log(i),
            a.dataTransfer.setData("itemID", i.id),
            (a.dataTransfer.effectAllowed = "move"),
            (a.dataTransfer.dropEffect = "move"));
        },
        onDrop: (a, i) => {
          a.preventDefault();
          const o = a.dataTransfer.getData("itemID"),
            r = n.value.find((_) => _.id === parseInt(o));
          r.list = i;
        },
      };
    },
    data() {
      return { valid: [!1, !1], validated: !1 };
    },
    methods: {
      reload() {
        this.$router.go();
      },
      validate() {
        this.validated = !0;
        for (let s = 0; s < 2; s++) this.valid[s] = !1;
        let n = "",
          t = "";
        for (let s = 0; s < this.getList(1).length; s++)
          n = n + this.getList(1)[s].word;
        for (let s = 0; s < this.getList(2).length; s++)
          t = t + this.getList(2)[s].word;
        n = n.trim();
        t = t.trim();
        if (n === "Person") {
          this.valid[0] = !0;
        }
        if (t === "Customer" || t === "Office Executive") {
          this.valid[1] = !0;
        }
        var l = document.getElementById("snackbar");
        if (this.valid[0] && this.valid[1]) {
          ((l.innerHTML =
            "Top Box → ✅ Correct | Bottom Box → ✅ Correct<br>Great! " +
            t +
            " is a Person. This is a valid Is-A relationship."),
            (l.style.backgroundColor = "#2e7d32"),
            (l.className = "show"),
            setTimeout(() => {
              ((l.className = l.className.replace("show", "")),
                this.$router.push("/screen-clerk-customer"));
            }, 2500));
        } else {
         let s1 = this.getList(1).length === 0
  ? "Top Box: Assign the general class"
  : (this.valid[0] ? "Top Box: ✅ Correct" : "Top Box: ❌ Incorrect. The general class should be Person");

let s2 = this.getList(2).length === 0
  ? "Bottom Box: Assign a specific class"
  : (this.valid[1] ? "Bottom Box: ✅ Correct" : "Bottom Box: ❌ Incorrect. Customer or Office Executive should be here");
          ((l.innerHTML =
            "Top Box → " +
            s1 +
            "<br>Bottom Box → " +
            s2 +
            "<br><br>Hint: Customer and Office Executive are types of the class Person."),
            (l.style.backgroundColor = "#333"),
            (l.className = "show"),
            setTimeout(function () {
              l.className = l.className.replace("show", "");
            }, 5e3));
        }
        (console.log(this.validated), console.log(n), console.log(t));
      },
      popup() {
        var n = document.getElementById("myModal"),
          t = document.getElementById("myBtn"),
          l = document.getElementsByClassName("close")[0];
        ((t.onclick = function () {
          n.style.display = "block";
        }),
          (l.onclick = function () {
            n.style.display = "none";
          }),
          (window.onclick = function (s) {
            s.target == n && (n.style.display = "none");
          }));
      },
    },
  },
  g = (n) => (w("data-v-2e3a4903"), (n = n()), x(), n),
  I = {
    style: {
      padding: "20px",
      display: "flex",
      "flex-direction": "row",
      "align-items": "center",
      "justify-content": "space-between",
    },
  },
  L = g(() =>
    e(
      "div",
      null,
      [
        e("h1", null, "Step 0: Understanding Generalization"),
        e("p", null, [
          m(
            "In order to understand Generalization please drag the class names into boxes to establish has-a and is-a relations.",
          ),
          e("br"),
          m(
            " Note: There maybe more than one solution and providing any one would suffice.",
          ),
        ]),
      ],
      -1,
    ),
  ),
  N = y(
    '<div id="snackbar" data-v-2e3a4903>Some text some message..</div><div id="myModal" class="modal" data-v-2e3a4903><div class="modal-content" data-v-2e3a4903><span class="close" data-v-2e3a4903>×</span><p style="padding:25px;" data-v-2e3a4903>The following is an example of is-a and has-a relationship</p><img src="' +
      k +
      '" style="height:500px;" data-v-2e3a4903></div></div>',
    2,
  ),
  B = { class: "flex" },
  T = { class: "flex-horizontal" },
  C = { class: "flex-horizontal" },
  E = { class: "outer-box" },
  S = g(() => e("h3", null, "Is-A", -1)),
  M = ["onDragstart"],
  V = { class: "flex-horizontal" },
  A = { class: "outer-box" },
  H = g(() =>
    e(
      "svg",
      {
        version: "1.0",
        xmlns: "http://www.w3.org/2000/svg",
        width: "202.000000pt",
        height: "52.000000pt",
        viewBox: "0 0 512.000000 512.000000",
        preserveAspectRatio: "xMidYMid meet",
      },
      [
        e(
          "g",
          {
            transform:
              "translate(0.000000,512.000000) scale(0.100000,-0.100000)",
            fill: "#000000",
            stroke: "none",
          },
          [
            e("path", {
              d: `M2490 5109 c-27 -7 -153 -129 -583 -562 -362 -364 -555 -566 -568
-592 -54 -115 26 -261 150 -273 111 -10 91 -25 498 381 l373 371 2 -2149 3
-2150 24 -38 c13 -21 42 -50 64 -65 34 -23 52 -27 107 -27 55 0 73 4 107 27
22 15 51 44 64 65 l24 38 3 2150 2 2149 373 -371 c407 -406 387 -391 498 -381
122 12 204 157 151 270 -19 42 -1062 1104 -1117 1138 -40 25 -124 34 -175 19z`,
            }),
          ],
        ),
      ],
      -1,
    ),
  ),
  P = g(() => e("br", null, null, -1)),
  R = g(() => e("br", null, null, -1)),
  j = ["onDragstart"],
  F = { class: "outer-box" },
  G = g(() => e("h3", null, "Classes", -1)),
  O = { class: "unidentified drag-el-horizontal", draggable: "false" },
  U = ["onDragstart"],
  Y = { id: "buttons", class: "relative" };
function Z(n, t, l, s, a, i) {
  return (
    d(),
    c(
      v,
      null,
      [
        e("header", I, [
          L,
          e(
            "button",
            { onClick: t[0] || (t[0] = (o) => i.reload()), class: "button-30" },
            "Reload",
          ),
          e(
            "button",
            {
              id: "myBtn",
              onClick: t[1] || (t[1] = (o) => i.popup()),
              class: "button-30",
              style: { "margin-left": "20px" },
            },
            "Help",
          ),
        ]),
        e("main", null, [
          N,
          e("div", B, [
            e("div", T, [
              e("div", null, [
                e("div", C, [
                  e("div", E, [
                    S,
                    e(
                      "div",
                      {
                        class: h([
                          "unidentified drag-el-horizontal",
                          {
                            correct: a.validated && a.valid[0],
                            incorrect: a.validated && !a.valid[0],
                          },
                        ]),
                        draggable: "false",
                      },
                      [
                        e(
                          "div",
                          {
                            class: "drop-zone",
                            onDrop: t[2] || (t[2] = (o) => s.onDrop(o, 1)),
                            onDragenter:
                              t[3] || (t[3] = u(() => {}, ["prevent"])),
                            onDragover:
                              t[4] || (t[4] = u(() => {}, ["prevent"])),
                          },
                          [
                            (d(!0),
                            c(
                              v,
                              null,
                              p(
                                s.getList(1),
                                (o) => (
                                  d(),
                                  c(
                                    "div",
                                    {
                                      key: o.id,
                                      class: "unidentified drag-el-horizontal",
                                      draggable: "true",
                                      onDragstart: (r) => s.startDrag(r, o),
                                    },
                                    [e("p", null, f(o.word), 1)],
                                    40,
                                    M,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ],
                          32,
                        ),
                      ],
                      2,
                    ),
                  ]),
                ]),
                e("div", V, [
                  e("div", A, [
                    H,
                    P,
                    R,
                    e(
                      "div",
                      {
                        class: h([
                          "unidentified drag-el-horizontal",
                          {
                            correct: a.validated && a.valid[1],
                            incorrect: a.validated && !a.valid[1],
                          },
                        ]),
                        draggable: "false",
                      },
                      [
                        e(
                          "div",
                          {
                            class: "drop-zone",
                            onDrop: t[5] || (t[5] = (o) => s.onDrop(o, 2)),
                            onDragenter:
                              t[6] || (t[6] = u(() => {}, ["prevent"])),
                            onDragover:
                              t[7] || (t[7] = u(() => {}, ["prevent"])),
                          },
                          [
                            (d(!0),
                            c(
                              v,
                              null,
                              p(
                                s.getList(2),
                                (o) => (
                                  d(),
                                  c(
                                    "div",
                                    {
                                      key: o.id,
                                      class: "unidentified drag-el-horizontal",
                                      draggable: "true",
                                      onDragstart: (r) => s.startDrag(r, o),
                                    },
                                    [e("p", null, f(o.word), 1)],
                                    40,
                                    j,
                                  )
                                ),
                              ),
                              128,
                            )),
                          ],
                          32,
                        ),
                      ],
                      2,
                    ),
                  ]),
                ]),
              ]),
            ]),
            e("div", null, [
              e("div", F, [
                G,
                e("div", O, [
                  e(
                    "div",
                    {
                      class: "drop-zone",
                      onDrop: t[8] || (t[8] = (o) => s.onDrop(o, 13)),
                      onDragenter: t[9] || (t[9] = u(() => {}, ["prevent"])),
                      onDragover: t[10] || (t[10] = u(() => {}, ["prevent"])),
                    },
                    [
                      (d(!0),
                      c(
                        v,
                        null,
                        p(
                          s.getList(13),
                          (o) => (
                            d(),
                            c(
                              "div",
                              {
                                key: o.id,
                                class: "unidentified drag-el-horizontal",
                                draggable: "true",
                                onDragstart: (r) => s.startDrag(r, o),
                              },
                              [e("p", null, f(o.word), 1)],
                              40,
                              U,
                            )
                          ),
                        ),
                        128,
                      )),
                    ],
                    32,
                  ),
                ]),
              ]),
            ]),
          ]),
        ]),
        e("footer", null, [
          e("div", Y, [
            e(
              "button",
              {
                class: "navitem",
                onClick: t[11] || (t[11] = (o) => i.validate()),
              },
              "Next",
            ),
          ]),
        ]),
      ],
      64,
    )
  );
}
const J = D(z, [
  ["render", Z],
  ["__scopeId", "data-v-2e3a4903"],
]);
export { J as default };
