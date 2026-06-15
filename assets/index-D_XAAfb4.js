import {
  c5 as c,
  bF as p,
  c6 as b,
  c7 as y,
  c8 as g,
  c9 as A,
  ca as m,
  cb as w,
  bV as f,
  bT as _,
  aa as I,
  bU as S,
  bW as k,
  bX as x,
  bz as T,
  bY as O,
  bZ as C,
  b_ as U,
  b$ as M,
  o as P,
  n as V,
  c0 as W,
  c1 as j,
  c2 as q,
  c3 as z,
  c4 as E,
} from "./index-Cxv4OWVI.js";
var F = (function (r) {
    c(i, r);
    function i(t, n) {
      return r.call(this) || this;
    }
    return (
      (i.prototype.schedule = function (t, n) {
        return this;
      }),
      i
    );
  })(p),
  h = {
    setInterval: function (r, i) {
      for (var t = [], n = 2; n < arguments.length; n++)
        t[n - 2] = arguments[n];
      return setInterval.apply(void 0, b([r, i], y(t)));
    },
    clearInterval: function (r) {
      return clearInterval(r);
    },
    delegate: void 0,
  },
  R = (function (r) {
    c(i, r);
    function i(t, n) {
      var e = r.call(this, t, n) || this;
      return (e.scheduler = t), (e.work = n), (e.pending = !1), e;
    }
    return (
      (i.prototype.schedule = function (t, n) {
        var e;
        if ((n === void 0 && (n = 0), this.closed)) return this;
        this.state = t;
        var s = this.id,
          a = this.scheduler;
        return (
          s != null && (this.id = this.recycleAsyncId(a, s, n)),
          (this.pending = !0),
          (this.delay = n),
          (this.id =
            (e = this.id) !== null && e !== void 0
              ? e
              : this.requestAsyncId(a, this.id, n)),
          this
        );
      }),
      (i.prototype.requestAsyncId = function (t, n, e) {
        return e === void 0 && (e = 0), h.setInterval(t.flush.bind(t, this), e);
      }),
      (i.prototype.recycleAsyncId = function (t, n, e) {
        if (
          (e === void 0 && (e = 0),
          e != null && this.delay === e && this.pending === !1)
        )
          return n;
        n != null && h.clearInterval(n);
      }),
      (i.prototype.execute = function (t, n) {
        if (this.closed) return new Error("executing a cancelled action");
        this.pending = !1;
        var e = this._execute(t, n);
        if (e) return e;
        this.pending === !1 &&
          this.id != null &&
          (this.id = this.recycleAsyncId(this.scheduler, this.id, null));
      }),
      (i.prototype._execute = function (t, n) {
        var e = !1,
          s;
        try {
          this.work(t);
        } catch (a) {
          (e = !0), (s = a || new Error("Scheduled action threw falsy error"));
        }
        if (e) return this.unsubscribe(), s;
      }),
      (i.prototype.unsubscribe = function () {
        if (!this.closed) {
          var t = this,
            n = t.id,
            e = t.scheduler,
            s = e.actions;
          (this.work = this.state = this.scheduler = null),
            (this.pending = !1),
            g(s, this),
            n != null && (this.id = this.recycleAsyncId(e, n, null)),
            (this.delay = null),
            r.prototype.unsubscribe.call(this);
        }
      }),
      i
    );
  })(F),
  d = (function () {
    function r(i, t) {
      t === void 0 && (t = r.now),
        (this.schedulerActionCtor = i),
        (this.now = t);
    }
    return (
      (r.prototype.schedule = function (i, t, n) {
        return (
          t === void 0 && (t = 0),
          new this.schedulerActionCtor(this, i).schedule(n, t)
        );
      }),
      (r.now = A.now),
      r
    );
  })(),
  K = (function (r) {
    c(i, r);
    function i(t, n) {
      n === void 0 && (n = d.now);
      var e = r.call(this, t, n) || this;
      return (e.actions = []), (e._active = !1), e;
    }
    return (
      (i.prototype.flush = function (t) {
        var n = this.actions;
        if (this._active) {
          n.push(t);
          return;
        }
        var e;
        this._active = !0;
        do if ((e = t.execute(t.state, t.delay))) break;
        while ((t = n.shift()));
        if (((this._active = !1), e)) {
          for (; (t = n.shift()); ) t.unsubscribe();
          throw e;
        }
      }),
      i
    );
  })(d),
  L = new K(R);
function X(r, i) {
  return (
    i === void 0 && (i = L),
    m(function (t, n) {
      var e = null,
        s = null,
        a = null,
        l = function () {
          if (e) {
            e.unsubscribe(), (e = null);
            var u = s;
            (s = null), n.next(u);
          }
        };
      function v() {
        var u = a + r,
          o = i.now();
        if (o < u) {
          (e = this.schedule(void 0, u - o)), n.add(e);
          return;
        }
        l();
      }
      t.subscribe(
        w(
          n,
          function (u) {
            (s = u), (a = i.now()), e || ((e = i.schedule(v, r)), n.add(e));
          },
          function () {
            l(), n.complete();
          },
          void 0,
          function () {
            s = e = null;
          }
        )
      );
    })
  );
}
function Y(r) {
  return f(function (i, t) {
    return r <= t;
  });
}
const $ = Object.freeze(
  Object.defineProperty(
    {
      __proto__: null,
      concatAll: _,
      debounceTime: X,
      distinctUntilChanged: I,
      distinctUntilKeyChanged: S,
      filter: f,
      map: k,
      mapTo: x,
      mergeAll: T,
      mergeMap: O,
      observeOn: C,
      pluck: U,
      share: M,
      shareReplay: P,
      skip: Y,
      startWith: V,
      subscribeOn: W,
      switchMap: j,
      take: q,
      takeUntil: z,
      withLatestFrom: E,
    },
    Symbol.toStringTag,
    { value: "Module" }
  )
);
export { d as S, L as a, X as d, $ as i, Y as s };
