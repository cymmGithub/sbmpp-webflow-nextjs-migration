import type { Metadata } from "next";
import {
  radaNadzorcza,
  komisjaRewizyjna,
  zarzad,
} from "@/lib/data/organization";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Schemat Organizacyjny",
  description:
    "Schemat organizacyjny Spółdzielni Budowlano-Mieszkaniowej Pracowników Państwowych w Lublinie. Rada Nadzorcza, Komisja Rewizyjna i Zarząd SBMPP.",
};

export default function SchematOrganizacyjnyPage() {
  return (
    <section className={styles.section}>
      <div className="container">
        <div className={styles.header}>
          <h1 className={styles.heading}>Schemat Organizacyjny</h1>
        </div>

        <div className={styles.orgChart}>
          {/* Rada Nadzorcza */}
          <div className={styles.orgBox}>
            <div className={styles.orgBoxHeading}>RADA NADZORCZA SBMPP</div>
            <div className={styles.orgBoxContent}>
              <div className={styles.membersGrid}>
                {/* Column 1 */}
                <div>
                  {radaNadzorcza.slice(0, 3).map((member) => (
                    <div key={member.name} className={styles.memberCard}>
                      <div className={styles.memberName}>{member.name}</div>
                      <div className={styles.memberRole}>{member.role}</div>
                    </div>
                  ))}
                </div>
                {/* Column 2 */}
                <div>
                  {radaNadzorcza.slice(3, 5).map((member) => (
                    <div key={member.name} className={styles.memberCard}>
                      <div className={styles.memberName}>{member.name}</div>
                      <div className={styles.memberRole}>{member.role}</div>
                    </div>
                  ))}
                </div>
                {/* Column 3 */}
                <div>
                  {radaNadzorcza.slice(5, 7).map((member) => (
                    <div key={member.name} className={styles.memberCard}>
                      <div className={styles.memberName}>{member.name}</div>
                      <div className={styles.memberRole}>{member.role}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Komisja Rewizyjna */}
              <div className={styles.komisjaSection}>
                <div className={styles.komisjaHeading}>
                  Komisja Rewizyjna Rady Nadzorczej
                </div>
                <div className={styles.komisjaGrid}>
                  {komisjaRewizyjna.map((member) => (
                    <div key={member.name} className={styles.memberCard}>
                      <div className={styles.memberName}>{member.name}</div>
                      <div className={styles.memberRole}>{member.role}</div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Connector line */}
          <div className={styles.connector} aria-hidden="true" />

          {/* Zarząd */}
          <div className={styles.orgBox}>
            <div className={styles.orgBoxHeading}>ZARZĄD SBMPP</div>
            <div className={styles.orgBoxContent}>
              <div className={styles.membersGrid}>
                {zarzad.map((member) => (
                  <div key={member.name} className={styles.memberCard}>
                    <div className={styles.memberName}>{member.name}</div>
                    <div className={styles.memberRole}>{member.role}</div>
                    {member.details && (
                      <>
                        <div className={styles.memberSeparator}>----------</div>
                        <div className={styles.memberDetails}>
                          {member.details}
                        </div>
                      </>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
