      const sortFn = (linkHead) => {
        if (!linkHead || !linkHead.next) return linkHead;
        let [head1, head2] = getMid(linkHead);
        head1 = sortFn(head1);
        head2 = sortFn(head2);
        return merge(head1, head2);
      }

      const getMid = (linkHead) => {
        if (!linkHead) return [null, null];
        let p = q = linkHead;
        let pre;
        while (p && q) {
          pre = p;
          p = p.next;
          q = q.next ? q.next.next : q.next;
        }
        let head1 = pre && pre.next;
        if (pre) pre.next = null;
        return [linkHead, head1];
      }

      function merge (head1, head2) {
        if (!head1 || !head2) return head1 || head2;

        let linkHead = null;
        let list = null;
        while (head1 && head2) {
          if (head1.val < head2.val) {
            if (!linkHead) {
              linkHead = list = head1;
            } else {
              list.next = head1;
              list = list.next;
            }
            head1 = head1.next;
          } else {
            if (!linkHead) {
              linkHead = list = head2;
            } else {
              list.next = head2;
              list = list.next;
            }
            head2 = head2.next;
          }
        }

        if (head1) {
          list.next = head1;
        }

        if (head2) {
          list.next = head2;
        }

        return linkHead;
      }


      const sortList = function (head) {
        if (!head || !head.next) return head;
        return sortFn(head)
      };